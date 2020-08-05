function main () {
  console.log('hello world!')

  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const preview = document.querySelector('#preview')
  const body = document.querySelector('body')

  // <input onChange={} />
  input.addEventListener('input', (event) => {
    console.log('value test:', event.target.value)

    const uppercase = event.target.value.toUpperCase()

    console.log('uppercase test:', uppercase)

    preview.textContent = uppercase
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