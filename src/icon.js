import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSlash,
  faHeadset,
  faUserFriends,
  faStoreAlt,
  faSignOutAlt,
  faPrint,
  faTv,
} from '@fortawesome/free-solid-svg-icons'
 

export default function init() {
  library.add(
    faSlash,
    faHeadset,
    faUserFriends,
    faStoreAlt,
    faSignOutAlt,
    faPrint,
    faTv
  );
}
