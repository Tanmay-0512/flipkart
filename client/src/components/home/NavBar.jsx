import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import { navData } from '../constants/data'

const Component = styled(Box)`
    display:flex;
    margin:55px 130px 0 130px;
    justify-content:space-between;
`
const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
`
const Container = styled(Box)`
    padding:12px 8px;
    text-align:center;
`


const NavBar = () => {
  return (
    <Component>
        {
            navData.map(data =>(
                <Container>
                    <img src={data.url} alt="nav" style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Component>
  )
}

export default NavBar