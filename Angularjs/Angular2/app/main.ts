import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@Component({
	selector: 'my-app',
	template: '<h1>{{title}}</h1>'

})

class AppComponent {
	title = 'My App's heading';
} 

@NgModule({

	declarations: [AppComponent],
	imports: [BrowserModule],
	bootstrap: [AppComponent]

})

class AppModule {}

platformBrowserDynamic()
.bootstapModule(AppModule);
