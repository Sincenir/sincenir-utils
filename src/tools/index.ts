import weappHelper from './weappHelper'
import weappEnvCheckHelper from './weappEnvCheckHelper'
import wxEnvCheckHelper from './wxEnvCheckHelper'

export default {
  ...weappHelper,
  ...weappEnvCheckHelper,
  ...wxEnvCheckHelper
}