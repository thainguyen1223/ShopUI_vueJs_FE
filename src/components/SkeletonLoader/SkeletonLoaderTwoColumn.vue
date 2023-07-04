<template>
    <div class="skeleton-loader">
      <div class="skeleton-loader-wrapper">
        <div class="skeleton-loader-img"></div>
          <span>
            <h1></h1>
          </span>
          <span>
            <div class="skeleton-loader-price"></div>
          </span>
        
       
      </div>
    </div>
  </template>
    
  <style scoped>
  .skeleton-loader{
    background-color: #f7f7f7;
    position: relative;
    width: 550px;
    height: 35.7rem;
    margin-bottom: 1rem;

  }
  .skeleton-loader-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .skeleton-loader-img {
    width: 80%;
    height: 60%;
   
  }
  span h1 {
    position: absolute;
    width: 90%;
    height: 3rem;
    top: 23rem;
    left: 19px;
    border-radius: 0.4rem;
  }
  span .skeleton-loader-price{
    position: absolute;
    width: 60%;
    height: 3rem;
    top: 29rem;
    left: 106px;
    border-radius: 0.4rem;
  }


  .skeleton-loader-wrapper * {
    background: linear-gradient(120deg,
        #e5e5e5 30%,
        #f2f2f2 38%,
        #f2f2f2 40%,
        #e5e5e5 48%);
    background-size: 300%;
    background-position: 100% 0;
    animation: anim 1.5s infinite;
  }
  
  @keyframes anim {
    to {
      background-position: -100% 0;
    }
  }
  @media only screen and (max-width: 992px) {
    .skeleton-loader{
        width: 100%;
    }
    span h1 {
        left: 20px;
    }
    span .skeleton-loader-price{
        width: 175px;
        left: 90px;
    }
  }
  </style>