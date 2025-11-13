import imgbetween from "@images/Image-copy-2-min.webp";
import imgright from "@images/Image-copy-min.webp";
import imgleft from "@images/Image-min.webp";

const imageSections = [
  {
    src: imgleft,
    caption:
      "Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.",
  },
  {
    src: imgbetween,
    caption:
      "Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.",
  },
  {
    src: imgright,
    caption:
      "Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.",
  },
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 px-4 sm:px-6 lg:px-0">
      {imageSections.map((item, idx) => (
        <div key={idx}>
          <img
            src={item.src}
            alt={`about-${idx}`}
            className="w-full aspect-[4/3] object-cover rounded-xl shadow-md mb-4"
          />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {item.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
