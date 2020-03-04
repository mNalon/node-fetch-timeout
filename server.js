import express from 'express'
var app = express();

const sleep = async (t) => {
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, t)
  })
}

app.get('/progressive/:total', async function(req, res){
  const total = req.params.total
  let i = 0

  while(i < total) {
    res.write(`${i}`)
    console.log(`${i} sent...\n`)
    i++
    await sleep(i * 1000)
  }

  res.end()
})  

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});