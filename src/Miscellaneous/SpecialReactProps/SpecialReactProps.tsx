import { FC } from "react";

/**
 * TASK 1: Make the labels to be rendered on the page with the provided HTML markup.
 *
 * TASK 2: Get rid of the "Warning" in the browser's console without changing the component's functionality.
 */

const labels = {
  heading: "Lorem <span class='text-muted'>ipsum</span>",
  content:
    'Lorem <strong>ipsum</strong> dolor sit amet, consectetur <em>adipisicing elit</em>. Aspernatur at eligendi modi mollitia officiis rerum soluta vitae? <a class="link-success" href="https://google.com/" target="_blank">Blanditiis delectus deserunt</a>, fuga ipsum magnam molestias, nemo pariatur <i>perferendis saepe tempora voluptas</i>?',
};

export const SpecialReactProps: FC = () => {
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: labels.heading }} />
      <p dangerouslySetInnerHTML={{ __html: labels.content }} />
      <div
        className="alert alert-secondary"
        contentEditable
        suppressContentEditableWarning
      >
        This is an editable content with <code>HTML</code>{" "}
        <strong>markup</strong>.
      </div>
    </>
  );
};
