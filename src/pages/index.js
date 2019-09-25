import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Instagram from '../components/instagram';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <Instagram />
    </Layout>
  );
};
