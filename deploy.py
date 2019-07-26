import os
import sys
import argparse


parser = argparse.ArgumentParser(description='Deploy personal website')
parser.add_argument('-s', '--select', help='Select individual deployment',
                    choices=['frontend', 'backend'])
args = parser.parse_args()


def deployFrontend():
    print('\n---------------------------')
    print('--- Deploying Frontend ---')
    print('---------------------------\n')

    print('Building frontend')
    os.system('npm run build --prefix frontend/')

    print('Removing current frontend')
    os.system('sudo rm -rf /var/www/austinrye.ca/*')

    print('Adding new frontend')
    os.system('sudo cp -r frontend/build/. /var/www/austinrye.ca/')


def deployBackend():
    print('\n---------------------------')
    print('--- Deploying Backend ---')
    print('---------------------------\n')

    print('Removing current backend')
    os.system('sudo rm -rf /srv/www-data/austinrye.ca/*')

    print('Adding new backend')
    backendFiles = ['venv', 'wsgi.py', 'uwsgi.ini', 'config.py', 'api']
    for file in backendFiles:
        os.system(
            'sudo cp -r backend/{0} /srv/www-data/austinrye.ca/'.format(file))


if __name__ == '__main__':

    # Execute deployment
    if args.select == None:
        deployFrontend()
        deployBackend()
    elif args.select == 'frontend':
        deployFrontend()
    elif args.select == 'backend':
        deployBackend()
    print('\n---------------------------')
    print('--- Deployment Finished ---')
    print('---------------------------\n')
