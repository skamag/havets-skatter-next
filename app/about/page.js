import Image from "next/image"
import image1 from "@/public/about-1.jpg"
import image2 from "@/public/about-2.jpg"

export const metadata = {
  title: "About",
}

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Velkommen til Havets Skatter
        </h1>

        <div className="space-y-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            asperiores omnis sed ullam veritatis enim magnam nisi, numquam
            explicabo. Qui laudantium sit debitis minima, deleniti error
            repudiandae cum quis quam?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            laborum reiciendis eos perspiciatis, velit laboriosam atque
            doloremque fugit cupiditate suscipit ullam perferendis nam, mollitia
            nemo dolore distinctio itaque, in laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            laborum reiciendis eos perspiciatis, velit laboriosam atque
            doloremque fugit cupiditate suscipit ullam perferendis nam, mollitia
            nemo dolore distinctio itaque, in laudantium.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Familiestyrt siden 1962
        </h1>

        <div className="space-y-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            laborum reiciendis eos perspiciatis, velit laboriosam atque
            doloremque fugit cupiditate suscipit ullam perferendis nam, mollitia
            nemo dolore distinctio itaque, in laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            laborum reiciendis eos perspiciatis, velit laboriosam atque
            doloremque fugit cupiditate suscipit ullam perferendis nam, mollitia
            nemo dolore distinctio itaque, in laudantium.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Utforsk vår meny
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
