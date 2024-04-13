import { useState } from 'react'

function Toggle({
  setBackgroundColor,
}: {
  setBackgroundColor: (color: string) => void
}) {
  const [isToggled, setIsToggled] = useState(false)

  const handleCheckboxChange = () => {
    setIsToggled(!isToggled)
    setBackgroundColor(!isToggled ? 'bg-black' : 'bg-blue-300')
  }

  return (
    <div>
      <label className=" cursor-pointer">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={` mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isToggled
              ? 'bg-[url("/images/a10.jpeg")] bg-cover '
              : 'bg-[url("/images/a11.jpeg")] bg-cover '
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isToggled ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
      </label>
    </div>
  )
}

export default Toggle
