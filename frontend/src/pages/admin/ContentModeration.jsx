import { useEffect, useState } from 'react';
import api from '../../api';
import '../../styles/admin/ContentModeration.css';

const ContentModeration = () => {
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await api.get('/content-moderation/');
        setContentList(response.data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, []);

  const handleApproveContent = async (id) => {
    try {
      await api.post(`/content-moderation/${id}/`);
      setContentList(contentList.filter((content) => content.id !== id));
    } catch (error) {
      console.error('Error approving content:', error);
    }
  };

  return (
    <div className="content-moderation">
      <h1>Content Moderation</h1>
      <ul className="content-list">
        {contentList.map((content) => (
          <li key={content.id}>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
            <button onClick={() => handleApproveContent(content.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentModeration;
