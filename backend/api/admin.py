# admin.py in the api directory
from django.contrib import admin
from .models import Staff, Content
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Admin for Staff Model
class StaffAdmin(admin.ModelAdmin):
    list_display = ['user', 'is_staff']
    search_fields = ['user__username']
    list_filter = ['is_staff']

    # Restrict adding or deleting staff for superusers only
    def has_add_permission(self, request):
        return request.user.is_superuser

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser

# Admin for Content Model
class ContentAdmin(admin.ModelAdmin):
    list_display = ['title', 'staff', 'created_at', 'updated_at']
    search_fields = ['title', 'staff__user__username']
    list_filter = ['created_at']

    # Adding export to CSV for reporting
    actions = ['export_as_csv']

    def export_as_csv(self, request, queryset):
        import csv
        from django.http import HttpResponse

        meta = self.model._meta
        field_names = [field.name for field in meta.fields]

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename={meta}.csv'
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            writer.writerow([getattr(obj, field) for field in field_names])

        return response

    export_as_csv.short_description = "Export Selected to CSV"

# Extending UserAdmin to include Staff Information
class StaffInline(admin.StackedInline):
    model = Staff
    can_delete = False

class CustomUserAdmin(UserAdmin):
    inlines = (StaffInline,)

# Register models in the admin
admin.site.unregister(User)  # Unregister the default User admin
admin.site.register(User, CustomUserAdmin)  # Register User with Staff inline
admin.site.register(Staff, StaffAdmin)  # Register the Staff model
admin.site.register(Content, ContentAdmin)  # Register the Content model
