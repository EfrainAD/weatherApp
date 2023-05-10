export class Http {
   static fetchData(url) {
      return new Promise((resolve, reject) => {
         const HTTP = new XMLHttpRequest()
         HTTP.open('GET', url)
         HTTP.onreadystatechange = function () {
            if (
               HTTP.readyState === XMLHttpRequest.DONE &&
               HTTP.status === 200
            ) {
               const returnedData = JSON.parse(HTTP.responseText)
               resolve(returnedData)
            } else if (HTTP.readyState === XMLHttpRequest.DONE) {
               console.log('error')
               reject(
                  'Something went wrong, got a response, but it was not a 200'
               )
            }
         }
         HTTP.send()
      })
   }
}
