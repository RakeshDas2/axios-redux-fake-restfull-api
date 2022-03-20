import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@mui/material';
import { deleteData, fetchingData, productDetails } from '../redux/actions/action';


function ShowProducts() {

    const recivedData = useSelector(state => state.fetchDataReducer)
    const dispatch = useDispatch()
    console.log(recivedData);
    useEffect(() => {
        dispatch(fetchingData())
    }, [])
    return (
        <div>
            <Container>
                <Grid container >

                    {
                        recivedData.products.length > 0 && recivedData.products.map(ele => {
                            return <Grid key={ele.id} xs={3} item>
                                <Card sx={{ maxWidth: 230 }} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={250}
                                            image={ele.image}
                                            alt="green iguana"
                                        />
                                        <Typography variant='h6'>{ele.title}</Typography>
                                        <Typography variant='h4'> Price: {ele.price}</Typography>
                                    </CardActionArea>
                                    <Button onClick={()=>{dispatch(productDetails(ele))}}>More Details</Button>
                                    <Button onClick={()=>{dispatch(deleteData(ele.id))}}>Delete</Button>
                                </Card>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default ShowProducts