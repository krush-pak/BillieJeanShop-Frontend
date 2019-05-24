import { connect } from 'react-redux'
import { sendForm } from '../modules/signup'

import Step1View from '../components/Step1View'

const mapDispatchToProps = {
  sendForm
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1View)
