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
        <span>
          <p></p>
        </span>
        <span>
          <div class="skeleton-loader-add"></div>
        </span>
    </div>
  </div>
</template>
  
<style scoped>
.skeleton-loader {
  background-color: #f7f7f7;
  position: relative;
  width: 1200px;
  height: 28rem;
  margin-bottom: 2rem;

}
.skeleton-loader-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.skeleton-loader-img {
  width: 30%;
  height: 100%;
 
}
span h1 {
  position: absolute;
  width: 60%;
  height: 4rem;
  top: 0;
  left: 24rem;
  border-radius: 0.4rem;
}
span .skeleton-loader-price{
  position: absolute;
  width: 20%;
  height: 4rem;
  top: 100px;
  left: 24rem;
  border-radius: 0.4rem;
}
span p {
  position: absolute;
  width: 60%;
  height: 4rem;
  top: 200px;
  left: 24rem;
  border-radius: 0.4rem;
}
span .skeleton-loader-add{
  position: absolute;
  width: 25%;
  height: 3.5rem;
  top: 300px;
  left: 24rem;
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
</style>