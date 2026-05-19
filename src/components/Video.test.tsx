import { render, screen, fireEvent } from "@testing-library/react";
import { Video } from "./Video";

describe("Video", () => {
  test("renders correctly when videoId is provided", () => {
    render(<Video videoId="testId" />);
    const videoContainer = screen.getByRole("button", { name: /Play Video/i });
    expect(videoContainer).toBeInTheDocument();
  });

  test("play button appears when video is not playing", () => {
    render(<Video videoId="testId" />);
    const playButton = screen.getByRole("button", { name: /Play Video/i });
    expect(playButton).toBeInTheDocument();
    expect(playButton.querySelector("svg")).toBeInTheDocument();

    // Ensure iframe is not present initially
    const iframe = screen.queryByTitle(/YouTube video player/i);
    expect(iframe).not.toBeInTheDocument();
  });

  test("iframe appears when video is playing", () => {
    render(<Video videoId="testId" />);
    
    // Click the play button to start the video
    const playButton = screen.getByRole("button", { name: /Play Video/i });
    fireEvent.click(playButton);

    // Now the iframe should be present
    const iframe = screen.getByTitle(/YouTube video player/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "https://www.youtube-nocookie.com/embed/testId?controls=0&autoplay=1");
  });

  test("clicking play button toggles video state", () => {
    render(<Video videoId="testId" />);
    
    // Initially, play button should be visible and iframe should not
    expect(screen.getByRole("button", { name: /Play Video/i })).toBeInTheDocument();
    expect(screen.queryByTitle(/YouTube video player/i)).not.toBeInTheDocument();

    // Click play button - iframe should appear, play button should disappear
    fireEvent.click(screen.getByRole("button", { name: /Play Video/i }));
    expect(screen.queryByRole("button", { name: /Play Video/i })).not.toBeInTheDocument();
    expect(screen.getByTitle(/YouTube video player/i)).toBeInTheDocument();

    // Clicking again (via a simulated second button click if it existed) would need further state testing
    // Since the button disappears after clicking, we can't actually toggle back in the UI
  });

  test("component returns null when no videoId is provided", () => {
    render(<Video videoId="" />);
    expect(screen.queryByRole("button", { name: /Play Video/i })).not.toBeInTheDocument();
    expect(screen.queryByTitle(/YouTube video player/i)).not.toBeInTheDocument();
  });

  test("renders with correct YouTube embed URL", () => {
    render(<Video videoId="dQw4w9WgXcQ" />);
    
    // Click the play button to show the iframe
    fireEvent.click(screen.getByRole("button", { name: /Play Video/i }));
    
    const iframe = screen.getByTitle(/YouTube video player/i);
    expect(iframe).toHaveAttribute("src", "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1");
  });
});