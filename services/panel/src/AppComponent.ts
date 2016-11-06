import {Component} from '@angular/core';

@Component({
  selector: 'panel',
  template: `<main class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <form>
                            <legend>Create post</legend>
                            <fieldset>
                                <div class="form-field">
                                    <label for="post-title">Title</label>
                                    <input id="post-title" required name="post-title" type="text" placeholder="Place your title" />
                                </div>
                                <div class="form-field">
                                    <label for="post-content">Content</label>
                                    <textarea id="post-content" placeholder="Place your content" row="6"></textarea>
                                </div>
                                <button type="submit">Save</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </main>`
})
export class AppComponent {}
