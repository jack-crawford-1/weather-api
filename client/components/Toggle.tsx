import { useState } from 'react'

function Toggle({
  setBackgroundColor,
  setBackgroundImage,
}: {
  setBackgroundColor: (color: string) => void
  setBackgroundImage: (image: string) => void
}) {
  const [isToggled, setIsToggled] = useState(false)

  const handleCheckboxChange = () => {
    setIsToggled(!isToggled)
    setBackgroundColor(!isToggled ? 'bg-black ' : 'bg-blue-400')
    setBackgroundImage(
      !isToggled ? 'url(/images/a6.png)' : 'url(/images/a3.png)',
    )
  }

  return (
    <div>
      <label className="cursor-pointer">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={`mx-2 flex h-6 w-[48px] items-center rounded-full p-1 duration-200 md:mx-4 md:h-8 md:w-[60px] ${
            isToggled
              ? 'bg-[url("/images/a10.jpeg")] bg-cover'
              : 'bg-[url("/images/a11.jpeg")] bg-cover'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 md:h-8 md:w-8 ${
              isToggled ? 'translate-x-[20px] md:translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
      </label>
    </div>
  )
}

export default Toggle
