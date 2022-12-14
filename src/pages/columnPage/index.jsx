import React, { useCallback, useState } from "react";
import { Box, Center, Divider, SimpleGrid, Flex } from "@chakra-ui/react";

import { newsList, newTagList } from "./constants";

import ButtonField from "components/ButtonField";
import NormalText from "components/NormalText";
import TitleText from "components/TitleText";

import {
  ColumnPageContainer,
  ColumnPageItem,
  ColumnPageItemTime,
  ColumnPageTagItem,
} from "./columnPage.styles";

const ColumnPage = () => {
  const [newsListState, setNewsListState] = useState(newsList);

  const handleReloadData = useCallback(() => {
    setNewsListState([...newsListState, ...newsList]);
  }, [newsListState]);

  return (
    <ColumnPageContainer>
      <SimpleGrid
        columns={{
          base: 2,
          md: 4,
        }}
        spacing={{ base: "8", md: "32px" }}
        marginTop={{
          base: "16px",
          md: "32px",
        }}>
        {newTagList.map((record, index) => (
          <ColumnPageTagItem key={index}>
            <TitleText
              title={record.title}
              fontSize='22px'
              fontSizeMobileProps='16px'
              lineHeight='26px'
              color='text.secondary'
              maxWidth='200px'
              textPosition='center'
              fontWeight='normal'
            />
            <Divider
              borderBottomWidth='2px'
              borderColor='#fff'
              mt='12px'
              mb='8px'
              width='56px'
            />
            <NormalText
              text={record.subTitle}
              color='#fff'
              fontSizeProps='18px'
              fontSizeMobileProps='14px'
              lineHeight='26px'
            />
          </ColumnPageTagItem>
        ))}
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 2,
          md: 4,
        }}
        spacing={{ base: "4px", md: "8px" }}
        marginTop={{
          base: "32px",
          md: "56ox",
        }}>
        {newsListState.map((record, index) => (
          <ColumnPageItem key={index}>
            <Box position='relative'>
              <img
                src={record.image}
                alt={record.title}
                style={{
                  width: "100%",
                  height: "144px",
                  objectFit: "cover",
                }}
              />
              <ColumnPageItemTime>
                <NormalText
                  text={record.time}
                  color='#fff'
                  fontSizeProps='15px'
                />
              </ColumnPageItemTime>
            </Box>
            <NormalText
              text={record.title}
              color='#414141'
              fontSizeProps='15px'
              marginBottom='5px'
              marginTop='12px'
            />
            <Flex>
              {record?.tagList?.map((tag) => (
                <NormalText
                  key={tag}
                  text={`#${tag}`}
                  color='#FF963C'
                  fontSizeProps='12px'
                  marginRight='8px'
                />
              ))}
            </Flex>
          </ColumnPageItem>
        ))}
      </SimpleGrid>
      <Center my='32px'>
        <ButtonField
          color='#fff'
          width='296px'
          height='56px'
          background='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
          hoverBackgroundColor='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
          buttonText='???????????????????????????'
          onClick={handleReloadData}
        />
      </Center>
    </ColumnPageContainer>
  );
};

export default ColumnPage;
