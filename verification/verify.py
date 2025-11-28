from playwright.sync_api import sync_playwright

def verify_portfolio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:4321")

            # Wait for content to load
            page.wait_for_selector("h1")

            # Take a screenshot
            page.screenshot(path="verification/portfolio.png", full_page=True)
            print("Screenshot saved to verification/portfolio.png")

            # Verify specific elements
            # Check for header
            header = page.get_by_role("banner")
            if header.is_visible():
                print("Header is visible")

            # Check for 404 page navigation
            page.goto("http://localhost:4321/non-existent-page")
            page.wait_for_selector("text=404")
            page.screenshot(path="verification/404.png")
            print("404 screenshot saved to verification/404.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_portfolio()
