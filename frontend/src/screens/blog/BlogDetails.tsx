import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useBlogQuery } from '../../app/api'
import { IBlog } from '../../app/api'

import { Box, Button, Typography } from '@mui/material'
import { BlogContent } from './BlogContent'
export interface IBlogDetailsProps {
  blog?: IBlog
}

function BlogDetails(props: IBlogDetailsProps) {
  const navigate = useNavigate()
  let params = useParams()
  const { data: blog } = useBlogQuery(params.slug || '')

  return (
    <Box sx={{ m: 'auto', p: '2rerm', width: '70%' }}>
      <Box sx={{ m: '2rem' }}>
        <Typography variant='h4'>Blog Details</Typography>
        <BlogContent blog={blog} />
        <Button
          variant='contained'
          color='info'
          onClick={() => navigate('update')}
          sx={{ width: 120, alignSelf: 'center' }}
        >
          Edit
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={() => navigate('delete')}
          sx={{ width: 120, alignSelf: 'center' }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  )
}

export { BlogDetails }
