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
          className={`mx-2 flex h-6 w-[48px] items-center rounded-full p-1 duration-500  md:h-9 md:w-[80px] ${
            isToggled
              ? 'bg-[url("/images/clouds.jpeg")]'
              : 'bg-[url("/images/stars.jpeg")]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full duration-500 md:h-10 md:w-10 ${
              isToggled
                ? 'translate-x-[20px] bg-[url("/images/sun1.png")] bg-cover md:h-10  md:translate-x-[40px]'
                : 'bg-[url("/images/a11.jpeg")] bg-cover md:h-9 '
            }`}
          ></span>
        </span>
      </label>
    </div>
  )
}

export default Toggle
