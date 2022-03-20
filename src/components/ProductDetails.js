import { Card, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {

    const recivedData=useSelector(state=>state.selectDataReducer)
    console.log(recivedData);
  return (
    <div>
        
        <Grid container spacing={2}>
            <Grid item xs={6}>
               <Paper component={Box}  >
                   <Card sx={{ maxWidth: 400 }} >
                       <CardMedia
                       
                       src={recivedData.product.image}
                       component="img"
                       />
                   </Card>
               </Paper>
            </Grid>
            <Grid item xs={6}>
                 <Paper component={Box}>
                   <Typography variant='h4'>{recivedData.product.title}</Typography>
                   <Typography variant='subtitle1'>{recivedData.product.description}</Typography>
                 </Paper>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductDetails