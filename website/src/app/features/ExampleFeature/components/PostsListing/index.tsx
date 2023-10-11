/**
 *
 * PostsListing
 *
 */
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { PostType } from 'app/services/example/types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

interface Props {
  posts: Array<PostType>;
}

export function PostsListing({ posts }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const Row = posts.map((post, index) => {
    return (
      <ListItem
        key={post.id}
        component="div"
        alignItems="flex-start"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary={`${post.title}`} />
      </ListItem>
    );
  });

  return (
    <>
      <Typography variant="h6">{t(...messages.posts())}</Typography>
      <List>{Row}</List>
    </>
  );
}
