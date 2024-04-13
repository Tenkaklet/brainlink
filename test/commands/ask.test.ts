import {expect, test} from '@oclif/test'

describe('ask', () => {
  test
  .stdout()
  .command(['ask'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['ask', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
