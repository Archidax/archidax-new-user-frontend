import { baseAxios, baseUrl } from '../index'
import errorHandler from '../errorHandler'
import Popup from '../../components/popUps'
import axios from 'axios'

export const launchNewProject = (data) => {
    axios({
        url: `${baseUrl}`,
        method: "POST",
        data:  {
            projectName: data.projectName
        }
    })
}