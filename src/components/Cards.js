/** @format */

import React from "react";
import { Badge, Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/Totext"; 
export const Cards = ({ data }) => {
  // const handleCallApi = () => {
  //   setLoading(true);
  //   axios
  //     .get("https://fakestoreapi.com/products?limit=8")
  //     .then(res => {
  //       // console.log(res?.data);
  //       setData(res?.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // };
  return (
    <Card
      className='max-w-xs overflow-hidden rounded-md h-[550px] border border-gray-600 shadow-xl hover:translate-y-2'
      imgSrc={data?.image} 
      imgSize='md'>
      <Card.Container className='absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50'>
        <Heart size={20} weight='bold' color='white' />
      </Card.Container>
      <Card.Container className='p-6'>
        <Card.Container className='flex items-center justify-between'>
          <Badge size='xs' colorType='light' color='gray'>
            {data?.id}
          </Badge>
          <Card.Title>${data?.price}</Card.Title>
        </Card.Container>
        <Card.Container className='my-3'>
          <Card.Title>{ShortenText(data?.title, 0, 75)}</Card.Title>
          <Card.Description>
            {ShortenText(ToText(data?.description), 0, 120) + "..."}
          </Card.Description>
        </Card.Container>
        <Card.Container className='flex items-center justify-start gap-5'>
          <Button size='sm' type='outlineGray'>
            <span className='pr-2'>
              <ShoppingCart size={24} />
            </span>
            Add To Cart
          </Button>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};
