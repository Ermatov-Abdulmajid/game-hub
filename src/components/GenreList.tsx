import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) {
    return (
      <List>
        {Array.from({ length: 10 }).map((_, index) => (
          <ListItem key={index} paddingY={"5px"}>
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
              <SkeletonText noOfLines={1} width="100px" />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
