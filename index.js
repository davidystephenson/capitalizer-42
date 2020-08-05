function main () {
  console.log('hello world!')

  const base = 'https://brettterpstra.com/titlecase/?title='

  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const preview = document.querySelector('#preview')
  const body = document.querySelector('body')

  // <input onChange={} />
  input.addEventListener('input', async (event) => {
    try {
      // 1. Encode the value to make it ready for URLs
      const parameter = encodeURIComponent(event.target.value)

      // 2. Combine the base url the encoded parameter
      const url = `${base}${parameter}`

      // 3. Fetch the url - no options required, but the server must
      // turn on CORS! This is always true in the browser, for both
      // Axios and fetch. NOS did not turn on CORS, so it's impossible
      // to request their website from the browser.
      const response = await fetch(url)

      // 4. Convert the response into a string or data
      // const data = response.json() // JS data
      const converted = await response.text() // Just a string

      // 5. Connect the response to your page
      preview.textContent = converted
    } catch (error) {
      throw error
    }
  })

  // <form onSubmit={}>
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const capitalized = preview.textContent

    console.log('capitalized test:', capitalized)

    const paragraph = document.createElement('p')
    paragraph.textContent = capitalized

    body.append(paragraph)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main)
} else {
  main()
}