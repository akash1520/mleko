import { Facebook, Instagram, Label } from '@mui/icons-material'
import { Badge, Button, FormLabel, Input, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className='footFlex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5426709227854!2d72.55085621433645!3d23.040558184943997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8550c45634e5%3A0x8354019f4963506c!2sMleko!5e0!3m2!1sen!2sin!4v1678621825862!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          <form>
            <Typography variant='h4' style={{fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696",marginBottom:"1em"}}>Join our mailing list</Typography>
            <div>
              <FormLabel sx={{color:"green"}}>Email:</FormLabel>
              <Input color="success" style={{width:"100%"}}/>
            </div>
              <Button color="success" sx={{marginTop:"1em"}}>Submit</Button>
          </form>
          <div style={{textAlign:"center"}}>
            <Typography variant='h5'>Contact us:</Typography>
            <Typography variant='h6'>+91 84607 05009</Typography>
            <Badge><a href='https://www.instagram.com/mlekocafe.in/'><Instagram fontSize="large"/></a></Badge>
            <Badge><a href='https://www.facebook.com/mlekothemilkshakebar'><Facebook fontSize='large'/></a></Badge>
          </div>
          
        </div>
        <div className='devAkash'>
            <Typography>&copy;Mleko, {new Date().getFullYear()}. Developed by <a href='https://www.instagram.com/akashhuyaar/' style={{textDecorationLine:"none"}}>Akash Parmar</a> </Typography>
        </div>
      </footer>
    </>
  )
}
