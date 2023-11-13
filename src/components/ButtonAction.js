/** @format */

import React from "react";
import { Button, Spinner } from "keep-react";

export const ButtonAction = ({ action, loading }) => {
  return (
    <Button
      size='md'
      type='primary'
      className='bg-green-800'
      color='success'
      onClick={action}>
      {loading ? (
        <>
          <span className='pr-2'>
            <Spinner color='success' size='md' />
          </span>
          Loading...
        </>
      ) : (
        "Get Data"
      )}
    </Button>
  );
};
