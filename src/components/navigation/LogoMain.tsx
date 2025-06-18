import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'

export default function LogoMain() {
  return (
    <div className="flex items-center">
      <div className="bg-tertiary text-primary me-3 flex h-10 w-10 items-center justify-center rounded-full">
        <FontAwesomeIcon icon={faTree} className="text-2xl" />
      </div>
      <span className="text-lg font-bold tracking-tight">Green Washer</span>
    </div>
  )
}
