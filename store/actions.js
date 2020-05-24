export default {
  async GET_USERS({ count } = {}) {
    const query = attachQuery('_limit', count)

    return await this.$axios.$get(`${process.env.USERS_ENDPOINT}${query}`)
  },
  async GET_COMMENTS({ count } = {}) {
    const query = attachQuery('_limit', count)

    return await this.$axios.$get(`${process.env.COMMENTS_ENDPOINT}${query}`)
  }
}

const attachQuery = (param, value, url) => {
  let separator = '?'
  if (/\?.+=/.test(url)) separator = '&'

  if (value) return `${url}${separator}${param}=${value}`
  return ''
}
