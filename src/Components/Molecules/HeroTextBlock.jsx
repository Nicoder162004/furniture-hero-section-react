// src/components/molecules/HeroTextBlock.jsx
import React from "react";
import Heading from "../Atoms/Heading";
import Text from "../Atoms/Text";
import Button from "../Atoms/Button";
import { ArrowUpRight } from "lucide-react";
import { Play } from "lucide-react";

const HeroTextBlock = () => {
  return (
    <div className="w-[35%]">
      <Heading>Your Comfort Zone Begins with Furnizen</Heading>
      <Text>
        Experience the Perfect Blend of Quality, Comfort, and Design in Every
        Piece. We Guarantee to Revamp Your Space and Cater to Your Unique Taste
        and Lifestyle.
      </Text>
      <div className="flex gap-4 mt-6">
        <Button type="primary">
          Shop Now <ArrowUpRight />
        </Button>
        <Button type="secondary">
          Explore Collection <Play size={18} />
        </Button>
      </div>
    </div>
  );
};

export default HeroTextBlock;
