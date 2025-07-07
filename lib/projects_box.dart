import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
final Map<String, dynamic> projectData = {
  "name": ['Weather app'],
  "description": ['A basic Flutter weather app that fetches and displays the current weather conditions for a single predefined city. Ideal as a starter project for understanding API integration and Flutter UI development.'],
  "lang": [{
    '1':['flutter','dart','Api']}
  ],
  "button": [
    'https://github.com/mauryamj/weatherapp',
  ],
};
class ProjectBox extends StatelessWidget {
  final int i;
  const ProjectBox({
    super.key,required this.i
  });
  Future<void> _launchUrl1(String urlString) async{
    final Uri url = Uri.parse(urlString);
    if(!await launchUrl(url)){
    }
  }
  @override
  Widget build(BuildContext context) {
    return
      Card(
      elevation: 6,
      child: Container(
        padding: const EdgeInsets.all(8.0),
        width: 300,
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(20)),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [

                Text(
                  projectData['name'][i],
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),
                    SizedBox(height: 8),
                    Text(projectData['description'][i], style: TextStyle(fontSize: 12)),
                    SizedBox(height: 8),
                    OutlinedButton( onPressed:(){_launchUrl1(projectData['button'][i]);},child:Text('GitHub', style: TextStyle(fontSize: 15))),
            ],
          ),
        ),
      ),
          );
  }
}