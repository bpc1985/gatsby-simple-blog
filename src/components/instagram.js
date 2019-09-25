import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const InstagramContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem -0.5rem;
  padding: 0.5rem 0;
`;

const instaPhotoStyles = css`
  box-shadow: 0;
  display: block;
  margin: 0.5rem;
  max-width: calc(33% - 1rem);
  width: 120px;
  transition: 200ms box-shadow linear;

  :focus,
  :hover {
    box-shadow: 0 2px 14px #22222244;
    z-index: 10;
  }
`
const imageStyles = css`
  width: 100%;
  * {
    margin-top: 0;
  }
`

const Instagram = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <InstagramContainer>
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}/`}
            css={instaPhotoStyles}
          >
            <Image
              key={photo.id}
              css={imageStyles}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </InstagramContainer>

      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Instagram;
