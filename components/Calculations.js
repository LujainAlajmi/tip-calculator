import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";

import { styled } from "nativewind";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledInput = styled(TextInput);
const StyledPressable = styled(Pressable);
export default function Calculations({
  setValue,
  setCustom,
  setTip,
  setNumOfPeople,
  tipAmount,
  total,
}) {
  return (
    <StyledView className="h-full w-full py-8">
      <StyledView className="w-full space-y-5 rounded-2xl bg-[#00474B] p-6">
        <StyledView className="flex flex-row items-center justify-between">
          <StyledView>
            <StyledText
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
              className=" text-base text-white"
            >
              Tip Amount
            </StyledText>
            <StyledText
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
              className=" text-sm text-[#7F9D9F]"
            >
              / person
            </StyledText>
          </StyledView>
          <StyledText
            className=" text-[32px] text-[#26C2AE]"
            style={{
              fontFamily: "SpaceMono_700Bold",
            }}
          >
            ${tipAmount}
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row items-center justify-between">
          <StyledView>
            <StyledText
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
              className=" text-base text-white"
            >
              Total
            </StyledText>
            <StyledText
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
              className=" text-sm text-[#7F9D9F]"
            >
              / person
            </StyledText>
          </StyledView>
          <StyledText
            className=" text-[32px] text-[#26C2AE]"
            style={{
              fontFamily: "SpaceMono_700Bold",
            }}
          >
            ${total}
          </StyledText>
        </StyledView>
        <StyledView className="w-full pt-2">
          <StyledPressable
            className="w-full rounded-lg bg-[#26C2AE] py-2"
            onPress={() => {
              setValue(0);
              setCustom(0);
              setTip(0);
              setNumOfPeople(0);
            }}
          >
            <StyledText
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
              className=" text-center text-xl text-[#00474B]"
            >
              Reset
            </StyledText>
          </StyledPressable>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
