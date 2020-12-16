<template>
  <h1 class="logo">
    <svg
      version="1.1"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    >
      <metadata>
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title />
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g transform="translate(-.21416 .41709)" fill="#fff">
        <path d="m12.397 40.38 30.673 13.617-0.17504 10.851-20.985-9.8312 0.22034 22.399-10.027-4.335z" />
        <path
          d="m48.694 44.587 10.238-4.7356-23.401-10.818 17.846-8.5984 24.797 11.606-0.17851 32.86-28.105 13.347 0.09085 9.4085 38.343-17.097-0.366-42.999-35.29-16.053-39.561 17.364z"
        />
      </g>
    </svg>
  </h1>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  width: 100px;
  height: 100px;
  line-height: 90px;
  padding: 5px;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: orange;
  color: #fff;
  text-align: center;
}

@media screen and (max-width: 450px) {
  .logo {
    width: 100px;
  }
}

@media screen and (max-width: 380px) {
  .logo {
    width: 100px;
  }
}

@media screen and (max-width: 360px) {
  .logo {
    width: 100px;
  }
  a {
    font-size: 18px;
  }
}
</style>
