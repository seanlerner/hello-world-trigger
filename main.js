module.exports = class {

  constructor() {
    this.trigger   = 'hw'
    this.nice_name = 'Hello World Trigger'
  }

  run(run) {
    setTimeout(() => {

      let result = 'Hello, '

      if (run.args)
        result += run.args
      else
        result += 'World'

      result += '!'

      if (run.args == 'object')
        run.resolve({ title: 'Hello', subtitle: 'World', body: "Here's your object."})
      else if (run.args == 'undefined')
        run.resolve()
      else if (run.args == 'undefined-fail')
        run.reject()
      else if (run.args == 'fail')
        run.reject('Goodbye, World!')
      else if (run.args == 'crash')
        beep
      else if (run.args)
        run.resolve(`Hello, ${run.args}!`)
      else
        run.resolve('Hello, World!')

    }, 2500)
  }

}
