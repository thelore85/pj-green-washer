import { Settings } from 'lucide-react'

type ButtonSettingProps = {
  onClick?: () => void
  label: string
}

export default function ButtonSetting({ label }: ButtonSettingProps) {
  return (
    <button className="mb-3 flex items-center justify-between text-sm text-gray-700">
      <Settings className="mr-2 inline-block" size={16} />
      {label}
    </button>
  )
}
