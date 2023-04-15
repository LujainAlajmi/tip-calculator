import { View, Text, Button, Pressable, TextInput } from "react-native";
import React from "react";
import { styled } from "nativewind";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledInput = styled(TextInput);
export default function SelectTips({ tip, setTip, setCustom, custom }) {
  return (
    <StyledView className="w-full pt-8">
      <StyledText
        className=" text-base text-[#5E7A7D]"
        style={{
          fontFamily: "SpaceMono_700Bold",
        }}
      >
        Select Tip %
      </StyledText>
      <StyledView className=" grid w-full grid-cols-2 space-y-4     pt-4">
        <StyledView className="flex flex-row space-x-4">
          <StyledPressable
            className={`group flex w-1/2 items-center  justify-center rounded-md bg-[#00474B] py-2 active:bg-[#9FE8DF] ${
              tip === 5 && "bg-[#26C2AE]"
            }`}
            onPress={(e) => setTip(5)}
          >
            <StyledText
              className={`text-2xl text-white group-active:text-[#00474B] ${
                tip === 5 && "text-[#00474B]"
              }`}
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
            >
              5%
            </StyledText>
          </StyledPressable>
          <StyledPressable
            className={`group flex w-1/2 items-center  justify-center rounded-md bg-[#00474B] py-2 active:bg-[#9FE8DF] ${
              tip === 10 && "bg-[#26C2AE]"
            }`}
            onPress={(e) => setTip(10)}
          >
            <StyledText
              className={`text-2xl text-white group-active:text-[#00474B] ${
                tip === 10 && "text-[#00474B]"
              }`}
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
            >
              10%
            </StyledText>
          </StyledPressable>
        </StyledView>
        <StyledView className="flex flex-row space-x-4">
          <StyledPressable
            className={`group flex w-1/2 items-center  justify-center rounded-md bg-[#00474B] py-2 active:bg-[#9FE8DF] ${
              tip === 15 && "bg-[#26C2AE]"
            }`}
            onPress={(e) => setTip(15)}
          >
            <StyledText
              className={`text-2xl text-white group-active:text-[#00474B] ${
                tip === 15 && "text-[#00474B]"
              }`}
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
            >
              15%
            </StyledText>
          </StyledPressable>
          <StyledPressable
            className={`group flex w-1/2 items-center  justify-center rounded-md bg-[#00474B] py-2 active:bg-[#9FE8DF] ${
              tip === 25 && "bg-[#26C2AE]"
            }`}
            onPress={(e) => setTip(25)}
          >
            <StyledText
              className={`text-2xl text-white group-active:text-[#00474B] ${
                tip === 25 && "text-[#00474B]"
              }`}
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
            >
              25%
            </StyledText>
          </StyledPressable>
        </StyledView>
        <StyledView className="flex flex-row space-x-4">
          <StyledPressable
            className={`group flex w-1/2 items-center  justify-center rounded-md bg-[#00474B] py-2 active:bg-[#9FE8DF] ${
              tip === 50 && "bg-[#26C2AE]"
            }`}
            onPress={(e) => setTip(50)}
          >
            <StyledText
              className={`text-2xl text-white group-active:text-[#00474B] ${
                tip === 50 && "text-[#00474B]"
              }`}
              style={{
                fontFamily: "SpaceMono_700Bold",
              }}
            >
              50%
            </StyledText>
          </StyledPressable>
          <StyledInput
            value={custom}
            onChangeText={(e) => setCustom(e)}
            placeholder="Custom"
            className="w-1/2  rounded-md bg-[#F3F9FA] px-[17px] py-[6px] text-right text-2xl text-[#00474B] placeholder:text-[#547878] focus:border-2 focus:border-[#26C2AE] focus:outline focus:outline-2 focus:ring-2 focus:ring-[#26C2AE]"
            style={{
              fontFamily: "SpaceMono_700Bold",
            }}
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
