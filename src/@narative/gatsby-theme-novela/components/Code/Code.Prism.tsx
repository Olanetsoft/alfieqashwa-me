import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "@emotion/styled";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'

import Icons from "@narative/gatsby-theme-novela/src/icons";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import { copyToClipboard } from "@narative/gatsby-theme-novela/src/utils";

import { LangsTitle } from './LangsTitle'

const RE = /{([\d,-]+)}/;

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)));

    return index => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      );
      return inRange;
    };
  } else {
    return () => false;
  }
}

function CodePrism({ codeString, language, metastring, ...props }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  if (props['live']) {
    return (
      <Container>
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor style={{ marginBottom: '6px', borderRadius: '4px' }} />
        <LivePreview style={{ fontSize: '18px', borderRadius: '4px' }} />
        <LiveError  style={{ color: 'tomato' }} />
      </LiveProvider >
      </Container>
    )
  } else {

  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        return (
          <LangsTitle>
            <pre className={className} style={{ position: "relative" }}>
              <Copy toCopy={codeString} />
              {tokens.map((line, index) => {
                const { className } = getLineProps({
                  line,
                  key: index,
                  className: shouldHighlightLine(index) ? "highlight-line" : "",
                });

                return (
                  <div key={index} className={className}>
                    <span className="number-line">{index + 1}</span>
                    {line.map((token, key) => {
                      const { className, children } = getTokenProps({
                        token,
                        key,
                      });

                      return (
                        <span key={key} className={className}>
                          {children}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </pre>
          </LangsTitle>
        );
      }}
    </Highlight>
  );
  }
}

export default CodePrism;

function Copy({ toCopy }: { toCopy: string }) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <CopyButton onClick={copyToClipboardOnClick}>
      {hasCopied ? (
        <>
          Copied <Icons.Copied fill="rgb(43, 131, 78)" />
        </>
      ) : (
        <>
          Copy <Icons.Copy fill="#d23669" />
        </>
      )}
    </CopyButton>
  );
}

const CopyButton = styled.button`
  position: absolute;
  right: 7px;
  top: 2px;
  padding: 8px 12px 7px;
  border-radius: 5px;
  color: #6f7177;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
/*
  ${mediaqueries.tablet`
    display: none;
  `} */
`;

const Container = styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 5px;
  font-size: 13px;
  margin: 15px auto 50px;
  border-radius: 5px;

      ${mediaqueries.desktop`
      left: -26px;
    `};

    ${mediaqueries.tablet`
      max-width: 526px;
      padding: 20px 20px;
      left: 0;
    `};

    ${mediaqueries.phablet`
      border-radius: 0;
      margin: 0 auto 25px;
      padding: 25px 20px;
      overflow: initial;
      width: unset;
      max-width: unset;
      float: left;
      min-width: 100%;
      overflow: initial;
      position: relative;
    `};
`;