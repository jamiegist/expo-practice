import { Button, Host, Image } from "@expo/ui/swift-ui";
import {
    background,
    buttonStyle,
    frame,
    shapes,
} from "@expo/ui/swift-ui/modifiers";
import { StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Host matchContents>
        <Button onPress={onPress} modifiers={[buttonStyle("plain")]}>
          <Image
            systemName="plus"
            size={38}
            color="#fff"
            modifiers={[
              frame({ width: 84, height: 84 }),
              background("#000", shapes.circle()),
            ]}
          />
        </Button>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    marginHorizontal: 60,
  },
});
