let host = ''
let environment = 'local'

if (process.env.NODE_ENV === 'production') {
  environment = 'production'
}

const baseUri = host
const SERVICES = {
  'local': {
    index: {
      api: '/data/index.json',
      projectName: 'order.insured.newAddInsuredInit'
    }
  },
  'production': {
    index: {
      api: '/apicenter',
      projectName: 'order.insured.newAddInsuredInit'
    }
  }
}

const API_CONFIG = Object.assign({
  baseUri: baseUri,
  appId: 'wowoohr_my_alipay_lifePayment',
  postKey: 'sign',
  secrect: ''
}, SERVICES[environment])

export default API_CONFIG
