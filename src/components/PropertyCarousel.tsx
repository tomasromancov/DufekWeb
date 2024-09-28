import { Box, SvgIcon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Colors } from "../ts/Colors.ts";

interface Props {
  images: string[];
}

function PropertyCarousel({ images }: Props) {
  return (
    <Splide
      hasTrack={false}
      aria-labell="Splide Carousel"
      options={{ rewind: true }}
    >
      <Box>
        <SplideTrack style={{ height: "100%" }}>
          {images.map((image, index) => (
            <>
              <SplideSlide>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    key={index}
                    src={image}
                    alt={"Image " + index}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </SplideSlide>
            </>
          ))}
        </SplideTrack>
        {/* Custom arrows for the carousel.
          Splide flips the prev arrow around so the same 
          icon can be used for prev and next.
        */}
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <SvgIcon
              sx={{ fontSize: "large", fill: "#000000" }}
              component={NavigateNextIcon}
            />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <SvgIcon
              sx={{ fontSize: "large", fill: "#000000" }}
              component={NavigateNextIcon}
            />
          </button>
        </div>
      </Box>
    </Splide>
  );
}

export default PropertyCarousel;