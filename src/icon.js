import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSlash,
  faHeadset,
  faUserFriends,
  faStoreAlt,
  faSignOutAlt,
  faTv,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFileAlt,
} from '@fortawesome/free-regular-svg-icons'

export default function init() {
  library.add(
    faSlash,
    faHeadset,
    faUserFriends,
    faStoreAlt,
    faSignOutAlt,
    faTv,
    faFileAlt,
  );
}
