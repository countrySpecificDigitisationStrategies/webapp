import { NotificationType } from 'shared/components/Notification/notification.types'
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
} from '@material-ui/icons'

export const icons: { [type: NotificationType]: JSX.Element } = {
  [NotificationType.success]: CheckCircleIcon,
  [NotificationType.warning]: WarningIcon,
  [NotificationType.error]: ErrorIcon,
  [NotificationType.info]: InfoIcon,
}
