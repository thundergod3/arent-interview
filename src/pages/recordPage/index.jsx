import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

import { exerciseList, recommendList, statusList } from "./constants";

import NormalText from "components/NormalText";
import TitleText from "components/TitleText";
import ButtonField from "components/ButtonField";
import HealthGraph from "components/HealthGraph";

import {
  RecordPageBodyContainer,
  RecordPageContainer,
  RecordPageDiaryItem,
  RecordPageExerciseContainer,
  RecordPageExerciseItem,
  RecordPageExerciseList,
  RecordPageGraphButton,
  RecordPageRecommendItem,
  RecordPageRecommendSubTitleContainer,
} from "./recordPage.styles";

import "./recordPage.styles.scss";

const RecordPage = () => {
  const [recommendListState, setRecommendListState] = useState(exerciseList);
  const [currentStatus, setCurrentStatus] = useState("年");

  const handleReloadData = useCallback(() => {
    setRecommendListState([...recommendListState, ...exerciseList]);
  }, [recommendListState]);

  const handleCurrentStatus = useCallback((value) => {
    setCurrentStatus(value);
  }, []);

  return (
    <RecordPageContainer>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        spacing={{ base: "8", md: "48opx" }}
        my={{
          base: "24px",
          md: "56px",
        }}>
        {recommendList.map((record) => (
          <RecordPageRecommendItem image={record.image} key={record.title}>
            <TitleText
              title={record.title}
              color='text.secondary'
              fontSize='25px'
              lineHeight='30px'
              marginBottom='16px'
              width='max-content'
              zIndex={10}
              fontWeight='normal'
            />
            <RecordPageRecommendSubTitleContainer>
              <NormalText text={record.subTitle} color='#fff' fontSize='14px' />
            </RecordPageRecommendSubTitleContainer>
          </RecordPageRecommendItem>
        ))}
      </SimpleGrid>
      <RecordPageBodyContainer>
        <Flex>
          <NormalText
            text='BODY RECORD'
            color='#fff'
            fontSizeProps='15px'
            marginRight='8px'
            maxWidth='96px'
          />
          <NormalText
            text='2021.05.21'
            color='#fff'
            fontSizeProps='22px'
            lineHeight='26px'
          />
        </Flex>
        <Box my='12px'>
          <HealthGraph />
        </Box>
        <Flex>
          {statusList.map((record) => (
            <RecordPageGraphButton
              key={record?.value}
              isActive={currentStatus === record?.value}
              onClick={() => handleCurrentStatus(record?.value)}>
              {record?.label}
            </RecordPageGraphButton>
          ))}
        </Flex>
      </RecordPageBodyContainer>
      <RecordPageExerciseContainer>
        <Flex marginBottom='8px'>
          <NormalText
            text='MY EXERCISE'
            color='#fff'
            fontSizeProps='15px'
            marginRight='8px'
            maxWidth='96px'
          />
          <NormalText
            text='2021.05.21'
            color='#fff'
            fontSizeProps='22px'
            lineHeight='26px'
          />
        </Flex>
        <RecordPageExerciseList className='record-page-exercise-list'>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacingX='40px'>
            {exerciseList.map((record, index) => (
              <RecordPageExerciseItem key={index}>
                <Flex justifyContent='space-between' marginLeft='20px'>
                  <NormalText
                    text={record.title}
                    color='#fff'
                    fontSize='15px'
                    lineHeight='21px'
                  />
                  <NormalText
                    text={record.minute}
                    color='text.secondary'
                    fontSize='18px'
                    lineHeight='18px'
                  />
                </Flex>
                <NormalText
                  text={record.subTitle}
                  color='text.secondary'
                  fontSize='15px'
                  lineHeight='22px'
                  normalTextContainerStyle={{
                    marginLeft: "20px",
                  }}
                />
              </RecordPageExerciseItem>
            ))}
          </SimpleGrid>
        </RecordPageExerciseList>
      </RecordPageExerciseContainer>
      <Box>
        <NormalText text='MY DIARY' color='#414141' fontSize='22px' />
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
          }}
          spacing={{ base: "8px", md: "12px" }}>
          {recommendListState.map((_, index) => (
            <RecordPageDiaryItem key={index}>
              <NormalText
                text='2021.05.21'
                color='#414141'
                letterSpacing='0.09px'
                fontSizeProps='18px'
                bold
              />
              <NormalText
                text='23:25'
                color='#414141'
                letterSpacing='0.09px'
                fontSizeProps='18px'
                bold
                marginBottom='12px'
              />
              <NormalText
                text='私の日記の記録が一部表示されます。'
                color='#414141'
                fontSizeProps='12px'
              />
              <NormalText
                text='テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
                color='#414141'
                fontSizeProps='12px'
              />
            </RecordPageDiaryItem>
          ))}
        </SimpleGrid>
      </Box>
      <Center my='32px'>
        <ButtonField
          color='#fff'
          width='296px'
          height='56px'
          background='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
          hoverBackgroundColor='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
          buttonText='自分の日記をもっと見る'
          onClick={handleReloadData}
        />
      </Center>
    </RecordPageContainer>
  );
};

export default RecordPage;
