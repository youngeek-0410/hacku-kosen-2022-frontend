import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronBackOutline } from "react-icons/io5";

import { styled } from "../../stitches.config";

export const BackHome: React.FC = () => {
  const router = useRouter();
  const { project_id } = router.query;

  return (
    <BackButton
      href={{
        pathname: "/projects/[project_id]",
        query: { project_id: project_id },
      }}
    >
      <IoChevronBackOutline color="#1C1B1A" size={20} />
    </BackButton>
  );
};

const BackButton = styled(Link, {
  color: "$textPrimary",
  marginRight: "6px",
  fontSize: "28px",
});
