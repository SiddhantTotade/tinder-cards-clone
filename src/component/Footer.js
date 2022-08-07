import React from 'react'
import { Replay } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { StarRate } from '@mui/icons-material'
import { FlashOn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './Footer.css'

function Footer() {
  return (
    <div className='bottomButtons'>
      <IconButton className='replay'>
        <Replay fontSize='large' />
      </IconButton>
      <IconButton className='close'>
        <Close fontSize='large' />
      </IconButton>
      <IconButton className='star'>
        <StarRate fontSize='large' />
      </IconButton>
      <IconButton className='favorite'>
        <Favorite fontSize='large' />
      </IconButton>
      <IconButton className='flash'>
        <FlashOn fontSize='large' />
      </IconButton>
    </div>
  )
}

export default Footer